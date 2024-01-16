import Image from 'next/image';
import nextImage from '@/assets/next.png'


const AlbumPage = () => {
    return (
        <div>
            <h1  className='mt-6 mb-2 text-3xl'> This is image component</h1>

            <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--JszVhDtd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd3omc5vp71r5k9z69b4.png" 
            width={500}
            height={500}
            alt='logo'></Image>

        <div>
        <h1 className='mt-6 mb-2 text-3xl'> Using Local file image</h1>

        <Image src={nextImage} 
            width={500}
            height={400}
            alt='logo'></Image>
        </div>


        </div>
    );
};

export default AlbumPage;