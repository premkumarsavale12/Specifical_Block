
interface SimpleBlockProps {
    subtitle?: string | null;
    contact: string;
    title: string;
    description: string;

}




export const SimpleBlockComponent = ({ subtitle, contact, title, description }: SimpleBlockProps) => {
    return (
        <section>

            <h1>{subtitle} </h1>

            {contact && <p> {title} </p> && description}

        </section>
    )
}