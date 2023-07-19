import { useParams } from "react-router-dom"

export default function JobDescription(){


    const { jobId } = useParams();

    return (
        <>
            <div>
                {jobId}
            </div>
        </>
    )
}



