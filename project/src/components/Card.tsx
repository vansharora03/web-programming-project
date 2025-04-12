interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className=''}: CardProps) => {
    return (
        <div className={`shadow-sm rounded-lg p-4 bg-#D9D9D9 ${className}`}>
            {children}
        </div>
    );
};

export default Card;