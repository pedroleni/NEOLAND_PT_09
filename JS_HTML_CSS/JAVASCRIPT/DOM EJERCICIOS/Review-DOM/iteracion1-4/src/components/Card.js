const template = (imgUrl, title) => `
<figure>
 <img src=${imgUrl} alt=${title}>
 <h4>${title}</h4>

</figure>
`;

export const PrintCard = (imgUrl, title) => {
  document.getElementById("app").innerHTML += template(imgUrl, title);
};
