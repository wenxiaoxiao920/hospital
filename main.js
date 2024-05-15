let docList; 
axios.get('http://localhost/dev-api/doctor/info/listAll')  
.then(response => {  
  docList = response.data.rows; 
  // 遍历docList并创建卡片  
  docList.forEach(doc => {  
  // 创建card div  
  const cardDiv = document.createElement('div');  
  cardDiv.className = 'card';  
  cardDiv.style.width = '20rem';  
  
  // 创建并添加图片（你可能需要动态地更改图片src）  
  const img = document.createElement('img');  
  img.src = './image/doc/' + (doc.docId) + '.png'; // 假设有某种方式获取图片编号  
  img.className = 'card-img-top';  
  img.alt = '...';  
  cardDiv.appendChild(img);  
  
  // 创建card-body div  
  const cardBody = document.createElement('div');  
  cardBody.className = 'card-body';  
  
  // 创建并添加h2元素  
  const h2 = document.createElement('h2');  
  h2.textContent = doc.docName;  
  cardBody.appendChild(h2);  
  // 创建并添加h3元素  
  const h3 = document.createElement('h3');  
  if(doc.docPosition == 1){
    h3.textContent = '住院医师'
  }else if(doc.docPosition == 2){
    h3.textContent = '主治医师'
  }else if(doc.docPosition == 3){
    h3.textContent = '副主任医师'
  }else{
    h3.textContent = '主任医师'
  }
  cardBody.appendChild(h3);  
  // 创建并添加h3元素  
  const h31 = document.createElement('h4');  
  h31.textContent = doc.department.deptName;  
  cardBody.appendChild(h31);  
  
  // 创建并添加p元素  
  const p = document.createElement('p');  
  p.className = 'card-text';  
  p.textContent = doc.docIntroduction;  
  cardBody.appendChild(p);  
  
  // 将card-body添加到card div  
  cardDiv.appendChild(cardBody);  
  
  // 将card div添加到card-container  
  const cardContainer = document.getElementById('card-container');  
  cardContainer.appendChild(cardDiv);  
}); 
})  
.catch(error => {  
  console.error(error);  
});  
let processList;
axios.get("http://localhost/dev-api/treatment/process/listAll")
.then(response=>{
processList = response.data.rows;
 // 遍历processList并创建列表项  
processList.forEach(process => {  
  // 创建li元素  
  const listItem = document.createElement('li');  
  listItem.className = 'list-group-item';  
  listItem.textContent = process.id+' '+process.title+': '+process.content; // 设置列表项的文本内容  
  
  // 获取ul元素并添加新的li元素  
  const ulElement = document.getElementById('process-list');  
  ulElement.appendChild(listItem);  
});  
})
.catch(error=>{
console.error(error);  
})