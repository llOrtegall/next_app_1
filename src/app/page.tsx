import { getUsers } from '../api/User'

export default async function Home() {
  const users = await getUsers()

  return (
    <section>
      <h1>Home</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  )
}
