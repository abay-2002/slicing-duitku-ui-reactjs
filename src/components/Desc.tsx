interface DescProps {
    text: string
}

export default function Desc({ text }: DescProps){
    return (
        <p
            className="text-sm font-medium text-gray-400"
        >
            {text}
        </p>
    )
}