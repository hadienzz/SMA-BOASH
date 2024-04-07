import Button from "./UI/Button";
import agniaCakep from '../assets/hero-image.png'
import Header from "./Header";

const Hero = () => {
    return (
        <section className="pl-[120px] bg-cream w-[100%] pt-[69px]  ">
            <Header />
            <div className="flex justify-between pr-[42px] sm:flex-wrap h-[763px] sm:h-full ">
                <article>
                    <div className="pb-[55px]">
                        <h1 className="w-[647px] text-darkGreen sm:text-[47px] md:text-[30px] font-bold pt-[94px] leading-normal ">Entry Level For <br /> Seizing a<span className="text-[#BAD94F]"> Healthy Future</span> Bright</h1>
                        <p className="text-xl text-[#8E986D] w-[500px] font-normal leading-normal pt-[25px] h-[120px]">Not only that, we also excel in students <br /> Achieving in academic andnon-academic fields, <br /> we facilitate students to develop and know their interests.'</p>
                    </div>
                    <div className="flex flex-row items-center gap-[33px]">
                        <Button w={186} h={62}>Joined</Button>
                        <button className="flex items-center gap-[17px]">
                            <div className="w-[62px] h-[62px] rounded-full border-darkGreen border-[3px]" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="mx-auto mt-[15px]">
                                    <path d="M14.42 0.839966C6.91703 0.839966 0.839966 6.91703 0.839966 14.42C0.839966 21.923 6.91703 28 14.42 28C21.923 28 28 21.923 28 14.42C28 6.91703 21.923 0.839966 14.42 0.839966ZM11.025 7.62998L21.21 14.42L11.025 21.21V7.62998Z" fill="#324002" />
                                </svg>
                            </div>
                            <p className="text-[#7B7B7B] text-xl -ml-[10px]">Play Video</p>
                        </button>
                    </div>
                </article>
                <aside className="relative flex items-start ">
                    <div className="relative flex mt-[100px] ">
                        <div className="rounded-tl-[150px]  w-[383px] h-[445px] rounded-tr-[20px] rounded-br-[30px] rounded-bl-[30px] bg-[#BAD94F] absolute "></div>
                        <img className="relative w-[539px]  h-[509px] -ml-[40px] object-contain -mt-[46px]" src={agniaCakep} alt="Foto Header" />
                    </div>
                </aside>
            </div>
        </section >
    );
};

export default Hero;
