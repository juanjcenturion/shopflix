

function Banner () {
    return (
        <div className=" w-full grid grid-cols-1 mt-1 pt-16 mx-auto">
            <img
            src="src/assets/img/banner-samsung.png"
            alt=""
            style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent)'
            }} 
            />
        </div>
    )
}

export default Banner