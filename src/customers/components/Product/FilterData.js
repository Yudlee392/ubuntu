export const color = [
    "White",
    "Black",
    "Green",
    "Red",
    "Blue",
    "Yellow",
    "Pink",
    "Purple",
];
export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            { value: "White", label: "White" },
            { value: "Black", label: "Black" },
            { value: "Green", label: "Green" },
            { value: "Red", label: "Red" },
            { value: "Blue", label: "Blue" },
            { value: "Yellow", label: "Yellow" },
            { value: "Pink", label: "Pink" },
            { value: "Purple", label: "Purple" },
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];
export const singleFilter = [
    {
        id:"price",
        name:"Price",
        options:[
            { value: "0-100", label: "0-100" },
            { value: "100-200", label: "100-200" },
            { value: "200-300", label: "200-300" },
            { value: "300-400", label: "300-400" },
            { value: "400-500", label: "400-500" },
            { value: "500-600", label: "500-600" },
        ],
    },
    {
        id:"discount",
        name:"Discount",
        options:[
            { value: "0-10", label: "0-10%" },
            { value: "10-20", label: "10%-20%" },
            { value: "20-30", label: "20%-30%" },
            { value: "30-40", label: "30%-40%" },
            { value: "40-50", label: "40%-50%" },
            { value: "50-60", label: "50%-60%" },
        ],
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" },
        ],
    }
];
