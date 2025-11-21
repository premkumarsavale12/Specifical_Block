interface SampleBlockProps {
  title: string;
  subtitle?: string;   
}

export const SampleBlockComponent = ({ title, subtitle }: SampleBlockProps) => {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
};
