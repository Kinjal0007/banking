import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/ui/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const loggedIn: User = {
    $id: "unique-id",
    email: "john.wick@example.com",
    userId: "user-id",
    dwollaCustomerUrl: "https://dwolla.com/customer-url",
    dwollaCustomerId: "customer-id",
    firstName: "John",
    lastName: "Wick",
    address1: "1234 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1960-01-01",
    ssn: "123-45-6789",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
