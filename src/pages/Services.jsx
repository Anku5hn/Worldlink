import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
const Services = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white h-[50px] ">
        <Header
          background={"bg-white"}
          homeview={""}
          servicesview={"border-b-2 border-custom-light-blue"}
          aboutusview={""}
        />
      </div>
      <div className="w-full h-screen bg-white flex justify-center">
        <div className='w-5/6 h-[80%] mt-10 border-4 border-custom-light-blue '>
            <div className='absolute lg:w-[20%] lg:h-[10%] w-[40%] h-[10%] border-4 border-custom-lighter-blue lg:inset-x-[40%] inset-x-[30%] lg:inset-y-[8%] inset-y-[10%] bg-white flex justify-center items-center'>
                <h2 className='lg:text-[24px] text-[18px] font-mono font-bold'>Logistics Services</h2>
            </div>
            <p className='lg:text-[24px] text-[16px] mt-10'>Here are our Logistics Services:</p>
            <ul className='lg:text-[18px] text-[8px] list-disc mx-10'>
                    <li>Transportation: Moving goods by land, air, or sea, including trucks, planes, and ships.</li>
                    <li>Warehousing: Storing goods in secure facilities before they are shipped.</li>
                    <li>Order fulfillment: Picking, packing, and shipping customer orders.</li>
                    <li>Inventory management: Tracking and managing product stock levels.</li>
                    <li>Cross-docking: Transferring goods directly between trucks or containers for faster delivery.</li>
                    <li>Returns processing: Managing the return of unwanted or damaged items.</li>
                    <li>Delivery tracking: Providing real-time information on shipment location.</li>
                    <li>Freight forwarding: Arranging international shipping and customs clearance.</li>
                    <li>Last-mile delivery: The final leg of the journey, getting goods to the end customer.</li>
                    <li>Packaging: Providing secure and compliant packaging for various products.</li>
            </ul>
        </div>
      </div>
      <div className="w-full h-screen bg-white flex justify-center">
        <div className='w-5/6 h-[80%] mt-10 border-4 border-custom-light-blue '>
            <div className='relative lg:w-[40%] lg:h-[10%] w-[50%] h-[10%] border-4 border-custom-lighter-blue lg:inset-x-[30%] inset-x-[25%] inset-y-[-5%] bg-white flex justify-center items-center'>
                <h2 className='lg:text-[24px] text-[18px] font-mono font-bold'>Supply Chain Services</h2>
            </div>
            <p className='lg:text-[24px] text-[16px] mt-10'>Here are our Supply Chain Services:</p>
            <ul className='lg:text-[18px] text-[8px] list-disc mx-10'>
                    <li>Supply chain design: Analyzing and optimizing the flow of goods throughout the supply chain.</li>
                    <li>Sourcing: Finding and managing relationships with suppliers of materials and goods.</li>
                    <li>Procurement: Negotiating and purchasing materials and goods at the best price.</li>
                    <li>Production planning: Scheduling and managing the production process.</li>
                    <li>Demand forecasting: Predicting future customer demand to ensure adequate stock.</li>
                    <li>Quality control: Ensuring products meet quality standards throughout the supply chain.</li>
                    <li>Delivery tracking: Providing real-time information on shipment location.</li>
                    <li>Vendor management: Building and maintaining relationships with key suppliers.</li>
                    
            </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Services;
