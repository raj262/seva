import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, Eye, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Devotees = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);

  // Mock data - will be replaced with real data later
  const mockDevotees = [
    { id: 1, name: "Rajesh Kumar", mobile: "9876543210", email: "rajesh@example.com", gothra: "Bharadwaja" },
    { id: 2, name: "Priya Sharma", mobile: "9876543211", email: "priya@example.com", gothra: "Kashyapa" },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      toast({
        title: "Search Required",
        description: "Please enter mobile, email, or name to search",
        variant: "destructive",
      });
      return;
    }
    
    const found = mockDevotees.find(d => 
      d.mobile.includes(searchTerm) || 
      d.email.includes(searchTerm) ||
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!found) {
      setShowRegistration(true);
      toast({
        title: "Devotee Not Found",
        description: "Please register new devotee",
      });
    } else {
      toast({
        title: "Devotee Found",
        description: `${found.name} - ${found.mobile}`,
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Devotee registered successfully!",
    });
    setShowRegistration(false);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Devotee Management
        </h1>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Search Devotee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="text-base mb-2 block">
                  Mobile / Email / Name
                </Label>
                <Input
                  id="search"
                  placeholder="Enter mobile number, email, or name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-14 text-lg"
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  size="lg"
                  className="w-full md:w-auto h-14 px-8 text-lg"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        {showRegistration && (
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                <UserPlus className="w-6 h-6" />
                Quick Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base mb-2 block">Name *</Label>
                    <Input id="name" required className="h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="mobile" className="text-base mb-2 block">Mobile Number *</Label>
                    <Input id="mobile" type="tel" required className="h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base mb-2 block">Email</Label>
                    <Input id="email" type="email" className="h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="gothra" className="text-base mb-2 block">Gothra</Label>
                    <Input id="gothra" className="h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="nakshatra" className="text-base mb-2 block">Nakshatra</Label>
                    <Input id="nakshatra" className="h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="pincode" className="text-base mb-2 block">Pincode</Label>
                    <Input id="pincode" className="h-12 text-lg" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="text-base mb-2 block">Address</Label>
                    <Input id="address" className="h-12 text-lg" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1 h-14 text-lg bg-accent hover:bg-accent/90">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Register Devotee
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg"
                    onClick={() => setShowRegistration(false)}
                    className="h-14 px-8 text-lg"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Devotees List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">All Devotees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDevotees.map((devotee) => (
                <div key={devotee.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">{devotee.name}</h3>
                    <p className="text-muted-foreground">{devotee.mobile} • {devotee.email}</p>
                    <p className="text-sm text-muted-foreground">Gothra: {devotee.gothra}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="lg" className="h-12">
                      <Eye className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12">
                      <Edit className="w-5 h-5" />
                    </Button>
                    <Button variant="destructive" size="lg" className="h-12">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Devotees;
