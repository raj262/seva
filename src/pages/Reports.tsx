import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Printer, BarChart } from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Reports & Analytics
        </h1>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 mb-3 mx-auto text-primary" />
              <h3 className="text-lg font-bold mb-1">Payment Mode Report</h3>
              <p className="text-sm text-muted-foreground">Cash, Cheque, Online, UPI</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <BarChart className="w-12 h-12 mb-3 mx-auto text-accent" />
              <h3 className="text-lg font-bold mb-1">Source Report</h3>
              <p className="text-sm text-muted-foreground">Counter, Website, Mobile</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Download className="w-12 h-12 mb-3 mx-auto text-success" />
              <h3 className="text-lg font-bold mb-1">Branch-wise Report</h3>
              <p className="text-sm text-muted-foreground">Compare branches</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Printer className="w-12 h-12 mb-3 mx-auto text-warning" />
              <h3 className="text-lg font-bold mb-1">Trending Sevas</h3>
              <p className="text-sm text-muted-foreground">Most popular sevas</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 mb-3 mx-auto text-primary" />
              <h3 className="text-lg font-bold mb-1">Common Sevas</h3>
              <p className="text-sm text-muted-foreground">Most booked sevas</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <BarChart className="w-12 h-12 mb-3 mx-auto text-accent" />
              <h3 className="text-lg font-bold mb-1">Pending Payments</h3>
              <p className="text-sm text-muted-foreground">Unpaid & partial</p>
            </CardContent>
          </Card>
        </div>

        {/* Report Generator */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Generate Custom Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="reportType" className="text-base mb-2 block">Report Type</Label>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="payment">Payment Mode Report</SelectItem>
                    <SelectItem value="source">Source Report (Counter/Website/Mobile)</SelectItem>
                    <SelectItem value="branch">Branch-wise Report</SelectItem>
                    <SelectItem value="trending">Trending Sevas</SelectItem>
                    <SelectItem value="common">Most Common Sevas</SelectItem>
                    <SelectItem value="pending">Pending Payments</SelectItem>
                    <SelectItem value="devotee">Devotee History</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="branch" className="text-base mb-2 block">Branch</Label>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="All branches" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="main">Main Branch</SelectItem>
                    <SelectItem value="north">North Branch</SelectItem>
                    <SelectItem value="south">South Branch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="startDate" className="text-base mb-2 block">Start Date</Label>
                <Input id="startDate" type="date" className="h-12 text-lg" />
              </div>

              <div>
                <Label htmlFor="endDate" className="text-base mb-2 block">End Date</Label>
                <Input id="endDate" type="date" className="h-12 text-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button size="lg" className="h-14 text-lg bg-primary hover:bg-primary/90">
                <FileText className="w-5 h-5 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" size="lg" className="h-14 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Export to Excel
              </Button>
              <Button variant="outline" size="lg" className="h-14 text-lg">
                <Printer className="w-5 h-5 mr-2" />
                Print Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;
