
export default function BlogPost({params}) {
   return (
    <main>
    <h1>Blog Item</h1>
    <p>{params.slug}</p>
</main>
   )
}