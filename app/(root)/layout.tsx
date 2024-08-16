import Sidebar from "@/components/Sidebar";

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "user_12345",
    email: "john.doe@example.com",
    userId: "user_12345",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/12345",
    dwollaCustomerId: "customer_12345",
    firstName: "John",
    lastName: "Wick",
    address1: "1234 Elm Street",
    city: "Metropolis",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
        {children}
    </main>
  );
}
