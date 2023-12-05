export default function UserHome({ params }: { params: { userName: string } }) {
  return (
    <>
      <h1>Welcome { params.userName }!</h1>
    </>
  )
}
