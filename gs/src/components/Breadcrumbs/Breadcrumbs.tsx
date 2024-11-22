interface BreadcrumbsProps {
    items: { label: string; href: string }[];
  }
  
  export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
      <nav className="text-sm text-gray-500">
        {items.map((item, index) => (
          <span key={index}>
            <a href={item.href} className="text-blue-500 hover:underline">
              {item.label}
            </a>
            {index < items.length - 1 && " / "}
          </span>
        ))}
      </nav>
    );
  }
  