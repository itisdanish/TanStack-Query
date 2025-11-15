# TanStack Query Learning Project

<img width="1740" height="869" alt="image" src="https://github.com/user-attachments/assets/e4d298e2-c48f-4961-8381-7d4c584c880f" />

This project is focused on learning **TanStack Query** with React +
Vite.

---

## 🚀 What This Project Contains

- Routing using **react-router-dom**
- API calls using **Axios**
- Data fetching with **TanStack Query**
- Clean UI using **Tailwind CSS**

---

## 📘 Topics Covered

### **1. Introduction**

- TanStack Query helps in fetching, caching, and updating data without
  writing complex state management code.

### **2. Setup**

- Installed React, Vite, Tailwind CSS, Axios, and TanStack Query.
- Configured QueryClientProvider at root of the app.

### **3. Data Fetching using `useQuery`**

- `useQuery` lets you fetch data with caching, auto-refetching, and
  error handling.
- When? → When you want structured API fetching.
- Why? → Removes manual loading/error handling code.
- How? → `useQuery({ queryKey, queryFn })`.

### **4. DevTools**

- Helps in debugging queries.
- Shows cache state, stale state, and request status.

### **5. QueryCache**

- Stores previous fetched results.
- Improves speed and avoids unnecessary calls.

### **6. Stale Time**

- Controls how long data stays "fresh".
- Reduces API calls by holding cached data.

### **7. Polling**

- Auto-refetching every few seconds.
- Used when data updates frequently.

### **8. Refetch Interval**

- Example: `refetchInterval: 1000` → Calls API every 1 second.

### **9. useQuery On Click**

- You can fetch API only when user clicks a button using
  `enabled: false`.

---

## 🛠️ Tech Used

- **React**
- **Vite**
- **TanStack Query**
- **Axios**
- **React Router**
- **Tailwind CSS**

---

## 📂 Project Goal

To learn complete TanStack Query concepts through practical examples and
routing-based pages.

---

## 📝 Author

Danish Iqbal\
React.js Frontend Developer
