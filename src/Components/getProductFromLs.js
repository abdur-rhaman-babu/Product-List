
export function getProductFromLs() {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
}
