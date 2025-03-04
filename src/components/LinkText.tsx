import { Link } from "react-router-dom";

interface LinkTextProps{
    path: string,
    pathName: string
}

export default function LinkText({ path, pathName }: LinkTextProps){
    return (
        <Link
            className="text-sm w-fit text-gray-400 font-bold hover:underline"
            to={path}
        >
            {pathName}
        </Link>
    )
}