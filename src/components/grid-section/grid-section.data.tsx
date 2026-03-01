export type GridCategoriesType = {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
};

export const gridCategories: GridCategoriesType[] = [
	{
		id: 1,
		title: "Formal Shirts",
		imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
		route: "shop/formal-shirts",
	},
	{
		id: 2,
		title: "Premium Trousers",
		imageUrl: "https://plus.unsplash.com/premium_photo-1676389765922-5cc3c92cd32d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		route: "shop/trousers",
	},
	{
		id: 3,
		title: "Polo T-Shirts",
		imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
		route: "shop/polos",
	},
	{
		id: 4,
		title: "New Arrivals",
		imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
		route: "shop/new",
	},
	{
		id: 5,
		title: "Best Sellers",
		imageUrl: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800&auto=format&fit=crop",
		route: "shop/best-sellers",
	},
];