import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Transaction } from "@/types";
import axios from "axios";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"


export default function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios.get('http://localhost:3001/transactions').then((res) => {
            setTransactions(res.data);
            console.log(res.data)
        })
    }, [])
    const filteredTransactions = useMemo(() => {
        return transactions.filter((transaction: Transaction) => {
            const matchesSearch = transaction.cardholder
                .toLowerCase()
                .includes(search.toLowerCase());
            const matchesStatus = filterStatus
                ? transaction.status === filterStatus
                : true;
            return matchesSearch && matchesStatus;
        });
    }, [transactions, search, filterStatus]);

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4 w-full">

                <div className="relative">

                    <Input
                        placeholder="Search by cardholder"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-dark-200 bg-dark-50 py-3 pr-4 pl-10 border rounded-lg focus:ring-2 focus:ring-accent w-full max-w-xs text-white focus:outline-none placeholder-gray-400"
                    />
                    <Search className="top-[8px] left-3 absolute w-5 h-5 text-gray-400" />

                </div>

                <Select onValueChange={(value) => setFilterStatus(value === "all" ? "" : value)} defaultValue="all">
                    <SelectTrigger className="border-dark-200 bg-dark-50 py-2 pr-4 pl-10 border rounded-lg focus:ring-2 focus:ring-accent w-[200px] text-white">
                        <span>{filterStatus || "Filter by status"}</span>
                    </SelectTrigger>
                    <SelectContent className="bg-dark-50 text-white">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Succeeded">Succeeded</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Canceled">Canceled</SelectItem>
                        <SelectItem value="Failed">Failed</SelectItem>
                        <SelectItem value="Refunded">Refunded</SelectItem>
                        <SelectItem value="Disputed">Disputed</SelectItem>
                    </SelectContent>
                </Select>

                <div className="ml-auto">
                    <Button className="bg-dark-100 text-white">Download</Button>
                </div>

            </div>

            <div className="border-dark-200 bg-dark-50 border rounded-xl overflow-hidden">
                <Table className="text-white hover:text-white">
                    <TableHeader>
                        <TableRow className="hover:bg-dark-100">
                            <TableHead className="px-6 py-4 font-semibold text-gray-400 text-left text-sm">Amount</TableHead>
                            <TableHead className="px-6 py-4 font-semibold text-gray-400 text-left text-sm">Currency</TableHead>
                            <TableHead className="px-6 py-4 font-semibold text-gray-400 text-left text-sm">Cardholder</TableHead>
                            <TableHead className="px-6 py-4 font-semibold text-gray-400 text-left text-sm">Status</TableHead>
                            <TableHead className="px-6 py-4 font-semibold text-gray-400 text-left text-sm">Created</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody >
                        {filteredTransactions.slice((page - 1) * 10, page * 10).map((transaction: Transaction, idx: number) => (
                            <TableRow key={idx} className="hover:bg-dark-100">
                                <TableCell>{transaction.amount.toFixed(2)}</TableCell>
                                <TableCell>{transaction.currency}</TableCell>
                                <TableCell>{transaction.cardholder}</TableCell>
                                <TableCell>{transaction.status}</TableCell>
                                <TableCell>{transaction.created}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination className="flex justify-between items-center bg-dark-200 px-4 py-2 rounded-xl text-white">
                <div>
                    <span></span>
                    No transactions : {transactions.length}
                </div>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => { if (page > 1) setPage(page - 1) }} />
                    </PaginationItem>
                    {[...Array(Math.ceil(filteredTransactions.length / 10))].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink isActive={page === i + 1} className={`${page === i + 1 && 'text-black'}`} onClick={() => setPage(i + 1)}>{i + 1}</PaginationLink>
                        </PaginationItem>
                    ))
                    }

                    {/* <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem> */}
                    <PaginationItem>
                        <PaginationNext onClick={() => {
                            if (page < Math.ceil(filteredTransactions.length / 10))
                                setPage(page + 1)
                        }} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div >
    );
}