import Cart from "../components/Cart";
import item4 from "../assets/item4.jpeg";
import item9 from "../assets/item9.jpeg";
import item6 from "../assets/item6.jpeg";
import item8 from "../assets/item8.jpeg";

function Home() {
  return (
    <div className="px-4">

   <section className="arrival-section mt-6">
      <h2 className="text-xl font-semibold">New Arrival</h2>
      <p className="text-sm text-gray-600">Unlimited Stock</p>


      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      
        <div className="product bg-white rounded shadow p-3">
          <img src={item4} alt="Flycurvy dress" className="w-full h-200 object-cover rounded" />
          <h4 className="mt-2 text-sm font-medium">
            Flycurvy Plus Size Wedding Guest Light Apricot Chiffon Floral Print Wrap Flutter Sleeve Maxi Dress
          </h4>
          <p className="mt-1 font-semibold">₹10,000</p>
        </div>
    <div className="product bg-white rounded shadow p-3">
          <img src={item9} alt="Peach Wedding Kurta" className="w-full h-200 object-cover rounded" />
          <h4 className="mt-2 text-sm font-medium">Peach Wedding Kurta</h4>
          <p className="mt-1 font-semibold">₹30,000</p>
        </div>

   
        <div className="product bg-white rounded shadow p-3">
          <img src={item6} alt="Maxi with front cut" className="w-full h-200 object-cover rounded" />
          <h4 className="mt-2 text-sm font-medium">Maxi with Front cut</h4>
          <p className="mt-1 font-semibold">₹30,000</p>
        </div>

       
        <div className="product bg-white rounded shadow p-3">
          <img src={item8} alt="Green Wedding Set" className="w-full h-200 object-cover rounded" />
          <h4 className="mt-2 text-sm font-medium">Green Wedding Set</h4>
          <p className="mt-1 font-semibold">₹30,000</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
