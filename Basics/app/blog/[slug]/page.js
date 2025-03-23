
export default async function BlogPost({params}) {
   const {slug} = await params
   return (
    <main>
    <h1>Blog Item</h1>
    <p>{slug}</p>
</main>
   )
}