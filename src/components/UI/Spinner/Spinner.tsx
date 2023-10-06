export default function Spinner() {
    return (
        <div className=" h-screen w-full z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-mainText"></div>
        </div>
    )
}