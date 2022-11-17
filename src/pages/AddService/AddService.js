import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle('Add Service')
    const handelAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.message.value;

        const service = {
            title,
            img,
            price,
            description
        }

        fetch('http://localhost:5000/add-services', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(service)  
        })
        .then(res => res.json())
        .then(data => {
            alert('Service added successfully');
            form.reset();
           
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='mt-12'>
            <h2 className='text-center text-3xl font-bold mb-6'>Add Service</h2>
         <form onSubmit={handelAddService}>
            <input type="text" name='name'  placeholder="Title" className="input input-bordered w-full mb-3" required/>
        
            <input type="text" name='image'  placeholder="Image URL" className="input input-bordered w-full mb-3" required/>
            
            <input type="text" name='price'  placeholder="Price" className="input input-bordered w-full mb-3" required/>

            <textarea name='message' className="textarea textarea-bordered w-full mb-3" placeholder="Service Description" required></textarea>

            <input  type="submit" value='Add Service' className='btn btn-outline' /> 
         </form>
        </div>
    );
};

export default AddService;