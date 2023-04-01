import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCud5jSv_Wh9yHzQ-rC4fBR526YRERIB3Q",
  authDomain: "punto-hamburguesa.firebaseapp.com",
  projectId: "punto-hamburguesa",
  storageBucket: "punto-hamburguesa.appspot.com",
  messagingSenderId: "1090738378098",
  appId: "1:1090738378098:web:632ea1196f2c5c6cd539eb",
};

const firebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(firebaseApp);

export async function getItemFromAPI(id) {
  const docRef = doc(DB, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    console.log("no such document!!");
  }
}

export default async function getItemsFromAPI() {
  try {
    const collectionProducts = collection(DB, "products");
    let respuesta = await getDocs(collectionProducts);
    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));
  const productsSnapshot = await getDocs(myQuery);
  const products = productsSnapshot.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });
  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);
  return docRef.id;
}

/*export async function exportItemsToFirestore() {
  const items = [
    {
      id: 1,
      imgFlag: "/img/arg.png ",
      name: "punto Argenta",
      imgBurger: "/img/hamburguesaArgentina.png",
      description:
        "2 medallones de ternera de 80gr, entre dos panes caseros con sesamo. Lechuga, Tomate, huevo frito, jamon, queso cheddar condimento a base de chimichurri",
      category: "carne",
      price: 450,
      stock: 34,
    },
    {
      id: 2,
      imgFlag: "/img/colombia.png",
      name: "punto colombiano",
      imgBurger: "/img/hamburguesaColombiana.jpg",
      description:
        "2 medallones de pollo de 80gr, entre dos panes caseros con sesamo. Lechuga, Tomate, huevo frito, jamon, tocineta( dos lonjas) y papas fritas trituradas",
      category: "pollo",
      price: 470,
      stock: 36,
    },
    {
      id: 3,
      imgFlag: "/img/bolivia.png",
      name: "punto boliviano",
      imgBurger: "/img/hamburguesaBolivia.jpg",
      description:
        "  dos panes con sesamo con dos medallones a base de calabaza y yuca, lechuga, tomate, cebolla, condimento a base de humus",
      category: "veggie",
      price: 430,
      stock: 27,
    },
    {
      id: 4,
      imgFlag: "/img/venezuela.png",
      name: "punto veneco carnivoro",
      imgBurger: "/img/arepaCarne.jpeg",
      description:
        "Super arepa rellena de una cantidad increible de carne molida, con cebolla rogadita caramelizada, tomates secos, y verduritas",
      category: "arepas",
      price: 350,
      stock: 30,
    },
    {
      id: 5,
      imgFlag: "/img/venezuela.png",
      name: "punto veneco carnivoro",
      imgBurger: "/img/arepaPollo.jpg",
      description:
        "Super arepa rellena de una cantidad increible de pollo, con cebolla rogadita caramelizada, tomates secos, y verduritas",
      category: "arepas",
      price: 330,
      stock: 45,
    },
    {
      id: 6,
      imgFlag: "/img/venezuela.png",
      name: "punto veneco carnivoro",
      imgBurger: "/img/arepaCerdo.jpeg",
      description:
        "Super arepa rellena de una cantidad increible de carne mechada de cerdo, con cebolla rogadita caramelizada, tomates secos, y verduritas",
      category: "arepas",
      price: 330,
      stock: 45,
    },
    {
      id: 7,
      imgFlag: "/img/venezuela.png",
      name: "punto veneco carnivoro",
      imgBurger: "/img/arepaJyQ.jpg",
      description:
        "Super arepa rellena de una cantidad increible de jamon y queso",
      category: "arepas",
      price: 330,
      stock: 55,
    },
    {
      id: 8,
      imgFlag: "/img/peru.png",
      name: "punto peruano",
      imgBurger: "/img/hamburguesaPeruana.jpeg",
      description:
        "Dos anillos grandes de salchicha de huacho, (mezclado con minima carne molida y queso azul tipo suizo) con dos fetas de queso, lechuga y tomate",
      category: "embutidos",
      price: 475,
      stock: 34,
    },
    {
      id: 9,
      imgFlag: "/img/brasil.png",
      name: "punto brasilero",
      imgBurger: "/img/hamburguesaBrasilera.jpg",
      description:
        " dos anillos grandes de carne de cerdo, lechuga, tomate, huevo, dos rodajas de queso, jamon, todo en dos tajadas grandes de tapioca",
      category: "cerdo",
      price: 570,
      stock: 120,
    },
    {
      id: 10,
      imgFlag: "/img/chile.png",
      name: "punto chileno",
      imgBurger: "/img/hamburguesachile.jpg",
      description:
        " dos anillos grandes a base de puro salmon, rodaja de tomate, mucho guacamole, y  lechuga",
      category: "pescados",
      price: 560,
      stock: 40,
    },
    {
      id: 11,
      imgFlag: "/img/mexico.png",
      name: "punto mexicano",
      imgBurger: "/img/hamburguesaMexicana.jpg",
      description:
        "dos medallones de carne (roast beef) tomate y lechuga, cebolla, queso chedar y mucho guacamole, en pan con semillas de sesamo",
      category: "carne",
      price: 450,
      stock: 50,
    },
    {
      id: 12,
      imgFlag: "/img/dominicana.png",
      name: "punto dominicano",
      imgBurger: "/img/hamburguesaDominicana.jpg",
      description:
        "Dos medallones grandes de carne de cerdo, tomate, rodajitas cortadas de repollo, chimichurri dominicano, cebolla, en pan de agua(tipo baguettitos)",
      category: "cerdo",
      price: 450,
      stock: 44,
    },
    {
      id: 13,
      imgFlag: "/img/estadosUnidos.png",
      name: "punto Americano",
      imgBurger: "/img/hamburguesaAmericana.jpeg",
      description:
        " dos medallones enormes de carne, tocineta, lechuga, tomate,pickles, cebolla caramelizada, tres rodajas de queso cheddar, huevo frito, en pan con sesamo",
      category: "carne",
      price: 560,
      stock: 170,
    },
    {
      id: 14,
      imgFlag: "/img/canada.png",
      name: "punto canadiense",
      imgBurger: "/img/hamburguesaCanadiense.jpeg",
      description:
        " dos medallones de carne con tres fetas de queso cheddar y 3 lonjas de tocineta",
      category: "carne",
      price: 450,
      stock: 34,
    },
    {
      id: 15,
      imgFlag: "/img/canada.png",
      name: "punto canadiense veggie",
      imgBurger: "/img/hamburguesaCanadienseV.webp",
      description:
        "Dos medallones grandes de lentejas, lechuga, tomate, cebolla caramelizada en pan multisemilla",
      category: "veggie",
      price: 400,
      stock: 45,
    },
    {
      id: 16,
      imgFlag: "/img/españa.png",
      name: "punto español",
      imgBurger: "/img/hamburguesaEspañola.jpg",
      description:
        " dos medallones de calamar (triturado), tomates cherrys deshidratados y dos hojas de lechuga. Panes de sesamo",
      category: "mariscos",
      price: 450,
      stock: 32,
    },
    {
      id: 17,
      imgFlag: "/img/vasca.png",
      name: "punto vasco",
      imgBurger: "/img/hamburguesaVasca.png",
      description:
        " dos medallones de pulpo triturado, dos hojas de lechuga y tomate, salsa de ajo entre dos panes con sesamo",
      category: "mariscos",
      price: 780,
      stock: 30,
    },
    {
      id: 18,
      imgFlag: "/img/uk.png",
      name: "punto ingles",
      imgBurger: "/img/hamburguesaInglesa.jpeg",
      description: "dos medallones de lenguado, lechuga, tomate, pickles",
      category: "pescados",
      price: 600,
      stock: 36,
    },
    {
      id: 19,
      imgFlag: "/img/francia.png",
      name: "punto frances",
      imgBurger: "/img/hamburguesaFrancesa.jpeg",
      description:
        "Dos medallones de carne cortada a cuchillo, si como leiste!! lechuga, tomate, queso roquefort, salsa de ajo y tres fetas de tocineta ",
      category: "carne",
      price: 500,
      stock: 45,
    },
    {
      id: 20,
      imgFlag: "/img/alemania.png",
      name: "punto aleman",
      imgBurger: "/img/hamburguesaAlemana.jpg",
      description:
        " dos medallones de salchichas de tipo aleman, hojas de repollo cortada, tomate, cebollas cortadas y caramelizadas en pan con sesamo",
      category: "embutidos",
      price: 550,
      stock: 200,
    },
    {
      id: 21,
      imgFlag: "/img/italia.png",
      name: "punto italiano",
      imgBurger: "/img/hamburguesaItaliana.png",
      description:
        "dos anillos grandes de merluza, cebolla caramelizada, tomates cherrys, albahaca, champignones, hojas de lechuga",
      category: "pescados",
      price: 580,
      stock: 200,
    },
    {
      id: 22,
      imgFlag: "/img/grecia.png",
      name: "punto griego",
      imgBurger: "/img/hamburguesaGriega.jpg",
      description:
        "dos medallones a base de sardinas procesadas, con mucho aceite de oliva, aceitunas, morron, tomates cherrys, queso griego, en panes multi semilla",
      category: "pescados",
      price: 600,
      stock: 230,
    },
    {
      id: 23,
      imgFlag: "/img/arabiaSaudita.png",
      name: "punto arabe",
      imgBurger: "/img/hamburguesaArabe.jpg",
      description:
        "Dos medallones grandes de carne, aromatizados con oregano y menta, y cocinadas en aceite de oliva, cebolla caramelizada, perejil, lechuga, tomate, manzana asada",
      category: "carne",
      price: 600,
      stock: 250,
    },
    {
      id: 24,
      imgFlag: "/img/siria.png",
      name: "punto Siria",
      imgBurger: "/img/hamburguesaSiria.jpeg",
      description:
        "dos porciones grandes de falafel, con mucho aceite de oliva, aceitunas, morron, tomates cherrys, en panes multi semilla",
      category: "veggie",
      price: 550,
      stock: 230,
    },
    {
      id: 25,
      imgFlag: "/img/sudafrica.png",
      name: "punto Sudafricano",
      imgBurger: "/img/hamburguesaSudafricana.jpg",
      description:
        "La autentica hamburguesa zulu, compuesta de dos anillos grandes de carne vacuna , con mucho aceite de oliva, cebollas asadas,queso halloumi, rodajas dce tomate , condimento pele pele en panes multi semilla",
      category: "carne",
      price: 500,
      stock: 130,
    },
    {
      id: 26,
      imgFlag: "/img/india.png",
      name: "punto hindu",
      imgBurger: "/img/hamburguesaHindu.png",
      description:
        "dos medallones de pollo, con mucho condimento a base de curry, pimienta, y comino, tomates , lechuga,mango,  y huevo frito  en panes multi semilla",
      category: "pollo",
      price: 500,
      stock: 330,
    },
    {
      id: 27,
      imgFlag: "/img/india.png",
      name: "punto hindu veggie",
      imgBurger: "/img/hamburguesaHinduV.jpg",
      description:
        "dos medallones a base de quinoa y cebolla, con curry, mangos y rodajas de tomates , en panes multi semilla",
      category: "veggie",
      price: 400,
      stock: 330,
    },
    {
      id: 28,
      imgFlag: "/img/tailandia.png",
      name: "punto tailandes",
      imgBurger: "/img/hamburguesaTailandesa.jpg",
      description:
        "dos medallones a base de puros langostinos , albahaca, tomate, cebolla caramelizada, cilantro y tamarindo, en panes multi semilla",
      category: "mariscos",
      price: 800,
      stock: 130,
    },
    {
      id: 29,
      imgFlag: "/img/tailandia.png",
      name: "punto tailandes veggie",
      imgBurger: "/img/hamburguesaTailandesaV.jpeg",
      description:
        "dos medallones de tofu , albahaca, tomate, cebolla caramelizada, cilantro y tamarindo, pedazitos de mango en panes multi semilla",
      category: "veggie",
      price: 600,
      stock: 230,
    },
    {
      id: 30,
      imgFlag: "/img/japon.png",
      name: "punto japones",
      imgBurger: "/img/hamburguesaJaponesa.jpg",
      description:
        "dos medallones a base de puro cangrejo ,  tomate, cebolla , alga kombu, condimentada con salsa tofu en pan con sesamo",
      category: "mariscos",
      price: 1200,
      stock: 100,
    },
    {
      id: 31,
      imgFlag: "/img/australia.png",
      name: "punto australiano",
      imgBurger: "/img/hamburguesaAustraliana.jpeg",
      description:
        "dos medallones de ternera,  lechuga, tomate, cebolla, dos huevos fritos, salsa BBQ , tres lojas de tocino, , en panes multi semilla",
      category: "carne",
      price: 600,
      stock: 150,
    },
    {
      id: 32,
      imgFlag: "/img/australia.png",
      name: "punto australiano veggie",
      imgBurger: "/img/hamburguesaAustralianaV.jpeg",
      description:
        "dos medallones a base remolacha , lechu, tomate, cebolla caramelizada, en panes multi semilla",
      category: "veggie",
      price: 400,
      stock: 330,
    },
  ];
  const collectionRef = collection(DB, "products");
  for (let item of items) {
    const docRef = await addDoc(collectionRef, item);
    console.log(docRef.id);
  }
}
 */
