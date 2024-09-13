import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewAdPage() {
  return (
    <form className="max-w-xl mx-auto flex gap-8">
      <div className="grow pt-8">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-center text-gray-500 uppercase text-xs font-semibold">
            Add photos your product
          </h2>
          <div className="flex flex-col py-2">
            <FontAwesomeIcon icon={faImage} className="h-24 text-gray-400"/>
            <button className="mt-2 border font-semibold border-blue-600 text-blue-600 px-4 py-1 rounded flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="h-4 mr-2"/>
              <span>Add photos</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grow pt-5">
        <label htmlFor="titleIn">Title</label>
        <input id="titleIn" type="text" placeholder="short, phone, car" />

        <label htmlFor="priceIn">Price</label>
        <input id="priceIn" type="number" placeholder="5.24" />

        <label htmlFor="category">Category</label>
        <select name="" id="category">
          <option selected disabled value="">Select category</option>
          <option value="">🚗  Cars</option>
          <option value="">📚  Books</option>
          <option value="">📱  Electronics</option>
          <option value="">🏠  Furniture</option>
          <option value="">👚  Clothes</option>
        </select>

        <label htmlFor="descriptionIn">Description</label>
        <textarea name="" id="descriptionIn" placeholder="description"></textarea>

        <label htmlFor="contacIn">Contact Information</label>
        <textarea name="" id="contacIn" placeholder="mobile: +57 4320 2327"></textarea>

        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
          Save
        </button>
      </div>
    </form>
  )
}