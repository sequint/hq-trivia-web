export default function UserHome({ params }: { params: { userName: String } }) {
  return (
    <>
      <h1>Welcome { params.userName }!</h1>
    </>
  )
}
