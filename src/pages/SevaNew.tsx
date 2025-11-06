import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Minus, ShoppingCart, UserPlus, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Devotee {
  name: string;
  mobile: string;
  email: string;
  gothra: string;
  nakshatra: string;
}

const SevaNew = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDevotee, setSelectedDevotee] = useState<Devotee | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sevaDate, setSevaDate] = useState("");
  const [branch, setBranch] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  // Mock devotee registration
  const [newDevotee, setNewDevotee] = useState({
    name: "",
    mobile: "",
    email: "",
    gothra: "",
    nakshatra: "",
    address: "",
    pincode: "",
  });

  // Mock seva list with search
  const allSevas = [
    { id: "S001", name: "Abhisheka", price: 500 },
    { id: "S002", name: "Annadana", price: 1000 },
    { id: "S003", name: "Archana", price: 100 },
    { id: "S004", name: "Sahasra Nama Archana", price: 250 },
    { id: "S005", name: "Rudrabhisheka", price: 750 },
    { id: "S006", name: "Satyanarayana Pooja", price: 1500 },
  ];

  const [sevaSearchTerm, setSevaSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredSevas = allSevas
    .filter(seva => 
      seva.name.toLowerCase().includes(sevaSearchTerm.toLowerCase()) ||
      seva.price.toString().includes(sevaSearchTerm)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  const addToCart = (seva: typeof allSevas[0]) => {
    const existing = cart.find(item => item.id === seva.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === seva.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...seva, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const balanceAmount = advanceAmount ? totalAmount - parseFloat(advanceAmount) : totalAmount;

  const handleRegisterDevotee = () => {
    setSelectedDevotee({
      name: newDevotee.name,
      mobile: newDevotee.mobile,
      email: newDevotee.email,
      gothra: newDevotee.gothra,
      nakshatra: newDevotee.nakshatra,
    });
    setStep(2);
    toast({ title: "Devotee registered successfully" });
  };

  const handleSearchDevotee = () => {
    // Mock search - in real app, search from database
    setSelectedDevotee({
      name: "Rajesh Kumar",
      mobile: "9876543210",
      email: "rajesh@example.com",
      gothra: "Bharadwaja",
      nakshatra: "Rohini",
    });
    setStep(2);
  };

  const handlePayment = () => {
    toast({ 
      title: "Booking confirmed!", 
      description: `Receipt will be printed. ${balanceAmount > 0 ? `Balance: ₹${balanceAmount}` : ''}` 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            New Seva Booking
          </h1>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                s === step ? "bg-primary text-primary-foreground" :
                s < step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Devotee Selection/Registration */}
        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Search Devotee</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder="Search by Mobile / Email / Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-14 text-lg flex-1"
                  />
                  <Button size="lg" className="h-14 px-8" onClick={handleSearchDevotee}>
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <UserPlus className="w-6 h-6" />
                  Quick Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base">Name *</Label>
                    <Input
                      value={newDevotee.name}
                      onChange={(e) => setNewDevotee({...newDevotee, name: e.target.value})}
                      className="h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Label className="text-base">Mobile *</Label>
                    <Input
                      value={newDevotee.mobile}
                      onChange={(e) => setNewDevotee({...newDevotee, mobile: e.target.value})}
                      className="h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Label className="text-base">Email</Label>
                    <Input
                      value={newDevotee.email}
                      onChange={(e) => setNewDevotee({...newDevotee, email: e.target.value})}
                      className="h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Label className="text-base">Gothra</Label>
                    <Select value={newDevotee.gothra} onValueChange={(v) => setNewDevotee({...newDevotee, gothra: v})}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select Gothra" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="Bharadwaja">Bharadwaja</SelectItem>
                        <SelectItem value="Kashyapa">Kashyapa</SelectItem>
                        <SelectItem value="Vatsa">Vatsa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base">Nakshatra</Label>
                    <Select value={newDevotee.nakshatra} onValueChange={(v) => setNewDevotee({...newDevotee, nakshatra: v})}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select Nakshatra" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="Rohini">Rohini</SelectItem>
                        <SelectItem value="Ashwini">Ashwini</SelectItem>
                        <SelectItem value="Pushya">Pushya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base">Address</Label>
                    <Input
                      value={newDevotee.address}
                      onChange={(e) => setNewDevotee({...newDevotee, address: e.target.value})}
                      className="h-12 text-lg"
                    />
                  </div>
                </div>
                <Button size="lg" className="h-14 px-8" onClick={handleRegisterDevotee}>
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register & Continue
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Seva Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Selected Devotee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                  <div><span className="text-muted-foreground">Name:</span> <strong>{selectedDevotee?.name}</strong></div>
                  <div><span className="text-muted-foreground">Mobile:</span> <strong>{selectedDevotee?.mobile}</strong></div>
                  <div><span className="text-muted-foreground">Gothra:</span> <strong>{selectedDevotee?.gothra}</strong></div>
                  <div><span className="text-muted-foreground">Nakshatra:</span> <strong>{selectedDevotee?.nakshatra}</strong></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Select Sevas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder="Search seva by name or cost..."
                    value={sevaSearchTerm}
                    onChange={(e) => setSevaSearchTerm(e.target.value)}
                    className="h-12 text-lg flex-1"
                  />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-12 text-lg w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="name">Sort by Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSevas.map(seva => (
                    <div key={seva.id} className="border rounded-lg p-4 flex justify-between items-center hover:bg-muted/30">
                      <div>
                        <p className="font-bold text-lg">{seva.name}</p>
                        <p className="text-primary text-xl font-bold">₹{seva.price}</p>
                      </div>
                      <Button size="lg" onClick={() => addToCart(seva)}>
                        <Plus className="w-5 h-5 mr-2" />
                        Add
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                  <Button size="lg" onClick={() => setStep(3)} disabled={cart.length === 0}>
                    Review Cart
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Review Cart */}
        {step === 3 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Review Your Cart
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-bold text-lg">{item.name}</p>
                      <p className="text-primary text-xl font-bold">₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button size="lg" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="w-5 h-5" />
                      </Button>
                      <span className="text-2xl font-bold w-12 text-center">{item.quantity}</span>
                      <Button size="lg" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>Total Amount:</span>
                    <span className="text-primary">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <Label className="text-base">Branch *</Label>
                    <Select value={branch} onValueChange={setBranch}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="main">Main Branch</SelectItem>
                        <SelectItem value="north">North Branch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base">Seva Date *</Label>
                    <Input
                      type="date"
                      value={sevaDate}
                      onChange={(e) => setSevaDate(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base">Remarks (Optional)</Label>
                  <Input
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="h-12 text-lg"
                    placeholder="Any special instructions"
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                  <Button size="lg" onClick={() => setStep(4)}>
                    Proceed to Payment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary/20">
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                      <p className="text-muted-foreground">Devotee:</p>
                      <p className="font-bold text-xl">{selectedDevotee?.name}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Sevas:</p>
                      <p className="font-bold text-xl">{cart.length} items</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Amount:</p>
                      <p className="font-bold text-2xl text-primary">₹{totalAmount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Seva Date:</p>
                      <p className="font-bold text-xl">{sevaDate}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base mb-2 block">Payment Mode *</Label>
                    <Select value={paymentMode} onValueChange={setPaymentMode}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select payment mode" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                        <SelectItem value="online">Online Transfer</SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="partial">Partial Payment (Advance)</SelectItem>
                        <SelectItem value="later">Pay Later</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {paymentMode === "partial" && (
                    <div>
                      <Label className="text-base mb-2 block">Advance Amount *</Label>
                      <Input
                        type="number"
                        value={advanceAmount}
                        onChange={(e) => setAdvanceAmount(e.target.value)}
                        className="h-14 text-lg"
                        placeholder="Enter advance amount"
                      />
                    </div>
                  )}
                </div>

                {paymentMode === "partial" && advanceAmount && (
                  <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
                    <div className="grid grid-cols-2 gap-4 text-lg">
                      <div>
                        <p className="text-muted-foreground">Advance Paid:</p>
                        <p className="font-bold text-xl text-accent">₹{advanceAmount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Balance Due:</p>
                        <p className="font-bold text-xl text-warning">₹{balanceAmount}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" onClick={() => setStep(3)}>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                  <Button size="lg" className="h-14 px-8" onClick={handlePayment}>
                    <Check className="w-5 h-5 mr-2" />
                    Confirm & Print Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default SevaNew;
