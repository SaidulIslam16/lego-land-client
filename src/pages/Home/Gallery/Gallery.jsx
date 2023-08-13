import img1 from "../../../assets/gallery/01.png"
import img2 from "../../../assets/gallery/02.png"
import img3 from "../../../assets/gallery/03.png"
import img4 from "../../../assets/gallery/04.png"
import img5 from "../../../assets/gallery/05.png"
import img6 from "../../../assets/gallery/06.png"

const Gallery = () => {
    return (
        <div className="my-10">
            <div className="my-7 text-center">
                <h1 className="text-4xl mb-6 font-bold">Lego Gallery</h1>
                <p>The LEGO Gallery showcases a kaleidoscope of imaginative creations brought to life through iconic interlocking bricks.</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img1} alt="" /></div>
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img2} alt="" /></div>
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img3} alt="" /></div>
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img4} alt="" /></div>
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img5} alt="" /></div>
                <div className="overflow-hidden group border-2 rounded-xl"><img className="rounded-xl group-hover:scale-110 transition-scale duration-300" src={img6} alt="" /></div>
            </div>
        </div>
    );
};

export default Gallery;