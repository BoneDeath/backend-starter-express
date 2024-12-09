const generatedID = async (model, prefix) => {
  const currentCount = await model.countDocuments(); // Menghitung jumlah data
  const newId = prefix + (currentCount + 1); // Generate _id baru
  return newId;
};

export default generatedID;
