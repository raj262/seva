import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Printer, Send, Edit, Trash2, Search, Download } from "lucide-react";

const Sevas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const mockSevas = [
    {
      id: "BK001",
      receiptId: "RC001",
      devotee: "Rajesh Kumar",
      seva: "Abhisheka",
      quantity: 2,
      amount: 1000,
      paymentMode: "Cash",
      status: "Paid",
      sevaDate: "2025-11-10",
    },
    {
      id: "BK002",
      receiptId: "-",
      devotee: "Priya Sharma",
      seva: "Annadana",
      quantity: 1,
      amount: 1000,
      paymentMode: "Pay Later",
      status: "Pending",
      sevaDate: "2025-11-12",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Seva List & Reports
        </h1>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="searchDevotee" className="text-base mb-2 block">Search Devotee</Label>
                <Input
                  id="searchDevotee"
                  placeholder="Name or mobile"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="filterBranch" className="text-base mb-2 block">Branch</Label>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="All branches" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="main">Main Branch</SelectItem>
                    <SelectItem value="north">North Branch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="filterPayment" className="text-base mb-2 block">Payment Mode</Label>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="All payments" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="later">Pay Later</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="filterDate" className="text-base mb-2 block">Seva Date</Label>
                <Input id="filterDate" type="date" className="h-12 text-lg" />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button size="lg" className="h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Apply Filters
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                <Download className="w-5 h-5 mr-2" />
                Export to Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sevas Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">All Seva Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-primary/5">
                    <th className="p-4 text-left font-bold text-base">Sr No</th>
                    <th className="p-4 text-left font-bold text-base">Booking ID</th>
                    <th className="p-4 text-left font-bold text-base">Receipt ID</th>
                    <th className="p-4 text-left font-bold text-base">Devotee</th>
                    <th className="p-4 text-left font-bold text-base">Seva</th>
                    <th className="p-4 text-left font-bold text-base">Qty</th>
                    <th className="p-4 text-left font-bold text-base">Amount</th>
                    <th className="p-4 text-left font-bold text-base">Payment</th>
                    <th className="p-4 text-left font-bold text-base">Status</th>
                    <th className="p-4 text-left font-bold text-base">Seva Date</th>
                    <th className="p-4 text-left font-bold text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSevas.map((seva, index) => (
                    <tr key={seva.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-base">{index + 1}</td>
                      <td className="p-4 font-semibold text-base">{seva.id}</td>
                      <td className="p-4 text-base">{seva.receiptId}</td>
                      <td className="p-4 font-semibold text-base">{seva.devotee}</td>
                      <td className="p-4 text-base">{seva.seva}</td>
                      <td className="p-4 text-center text-base">{seva.quantity}</td>
                      <td className="p-4 font-bold text-base text-primary">₹{seva.amount}</td>
                      <td className="p-4 text-base">{seva.paymentMode}</td>
                      <td className="p-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          seva.status === "Paid" 
                            ? "bg-accent/20 text-accent" 
                            : "bg-warning/20 text-warning"
                        }`}>
                          {seva.status}
                        </span>
                      </td>
                      <td className="p-4 text-base">{seva.sevaDate}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Printer className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Send className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Sevas</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl font-bold text-primary">₹2,000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Paid</p>
                  <p className="text-2xl font-bold text-accent">₹1,000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending</p>
                  <p className="text-2xl font-bold text-warning">₹1,000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Sevas;
