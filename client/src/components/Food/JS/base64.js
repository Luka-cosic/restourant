export const base64 = (e, setMealData, mealData)=>{
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    const handleFileUpload = async (e)=>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setMealData({...mealData, img: base64})  
   }
   handleFileUpload(e)
    
}