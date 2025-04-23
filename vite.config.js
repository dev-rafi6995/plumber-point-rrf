import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				about: path.resolve(__dirname, "about-us.html"),
				service: path.resolve(__dirname, "service.html"),
				project: path.resolve(__dirname, "our-project.html"),
				blog: path.resolve(__dirname, "our-blog.html"),
				contact: path.resolve(__dirname, "contact-us.html"),
			},
		},
	},
	plugins: [tailwindcss()],
});
