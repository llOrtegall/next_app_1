export default function NewAdPage() {
  return (
    <form className="max-w-sm mx-auto">
      <h1>List you product</h1>
      <label htmlFor="titleIn">Title</label>
      <input id="titleIn" type="text" placeholder="short, phone, car"/>

      <label htmlFor="priceIn">Price</label>
      <input id="priceIn" type="number" placeholder="5.24"/>

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
    </form>
  )
}