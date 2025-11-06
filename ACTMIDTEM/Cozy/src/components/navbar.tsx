import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempted with email: ${loginEmail}`);
    setLoginEmail("");
    setLoginPassword("");
    setOpen(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sign up attempted with name: ${signupName}, email: ${signupEmail}`);
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setOpen(false);
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${resetEmail}`);
    setResetEmail("");
    setShowReset(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-700" />
            <span className="text-xl">Cozy Drip</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-amber-700 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-700 hover:text-amber-700 transition-colors">
              Menu
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors">
              Contact
            </a>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-amber-700 hover:bg-amber-800">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                {!showReset ? (
                  <Tabs defaultValue="login" className="w-full">
                    <DialogHeader>
                      <DialogTitle>Welcome to Cozy Drip</DialogTitle>
                      <DialogDescription>
                        Login to your account or create a new one
                      </DialogDescription>
                    </DialogHeader>
                    <TabsList className="grid w-full grid-cols-2 mt-4">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <button 
                            type="button"
                            onClick={() => setShowReset(true)}
                            className="text-amber-700 hover:underline"
                          >
                            Forgot password?
                          </button>
                        </div>
                        <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                          Login
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="signup">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-name">Name</Label>
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder="Your Name"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="your@email.com"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="••••••••"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                          Sign Up
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle>Reset Password</DialogTitle>
                      <DialogDescription>
                        Enter your email to receive a password reset link
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleReset} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="reset-email">Email</Label>
                        <Input
                          id="reset-email"
                          type="email"
                          placeholder="your@email.com"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setShowReset(false)}
                        >
                          Back
                        </Button>
                        <Button type="submit" className="flex-1 bg-amber-700 hover:bg-amber-800">
                          Send Reset Link
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#menu"
                className="text-gray-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-amber-700 hover:bg-amber-800 w-full">
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  {!showReset ? (
                    <Tabs defaultValue="login" className="w-full">
                      <DialogHeader>
                        <DialogTitle>Welcome to Cozy Drip</DialogTitle>
                        <DialogDescription>
                          Login to your account or create a new one
                        </DialogDescription>
                      </DialogHeader>
                      <TabsList className="grid w-full grid-cols-2 mt-4">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="login">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email-mobile">Email</Label>
                            <Input
                              id="email-mobile"
                              type="email"
                              placeholder="your@email.com"
                              value={loginEmail}
                              onChange={(e) => setLoginEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password-mobile">Password</Label>
                            <Input
                              id="password-mobile"
                              type="password"
                              placeholder="••••••••"
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                              required
                            />
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <button 
                              type="button"
                              onClick={() => setShowReset(true)}
                              className="text-amber-700 hover:underline"
                            >
                              Forgot password?
                            </button>
                          </div>
                          <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                            Login
                          </Button>
                        </form>
                      </TabsContent>
                      
                      <TabsContent value="signup">
                        <form onSubmit={handleSignup} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="signup-name-mobile">Name</Label>
                            <Input
                              id="signup-name-mobile"
                              type="text"
                              placeholder="Your Name"
                              value={signupName}
                              onChange={(e) => setSignupName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signup-email-mobile">Email</Label>
                            <Input
                              id="signup-email-mobile"
                              type="email"
                              placeholder="your@email.com"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="signup-password-mobile">Password</Label>
                            <Input
                              id="signup-password-mobile"
                              type="password"
                              placeholder="••••••••"
                              value={signupPassword}
                              onChange={(e) => setSignupPassword(e.target.value)}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                            Sign Up
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <>
                      <DialogHeader>
                        <DialogTitle>Reset Password</DialogTitle>
                        <DialogDescription>
                          Enter your email to receive a password reset link
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleReset} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="reset-email-mobile">Email</Label>
                          <Input
                            id="reset-email-mobile"
                            type="email"
                            placeholder="your@email.com"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => setShowReset(false)}
                          >
                            Back
                          </Button>
                          <Button type="submit" className="flex-1 bg-amber-700 hover:bg-amber-800">
                            Send Reset Link
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
