export const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4 py-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/customers">Customers</a>
        </li>
        <li>
          <a href="/dashboard/invoices">Invoices</a>
        </li>
      </ul>
    </nav>
  )
}