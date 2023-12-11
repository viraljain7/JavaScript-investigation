const insert = document.querySelector(".insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = ` <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </tbody>
  </table>`;
});
