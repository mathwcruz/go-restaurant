import { useState, useEffect } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import Food, { Food as FoodDashboard } from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";
import ModalEditFood from "../../components/ModalEditFood";
import { FoodsContainer } from "./styles";

function Dashboard() {
  const [foods, setFoods] = useState<FoodDashboard[]>([]);
  const [editingFood, setEditingFood] = useState({} as FoodDashboard);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  async function getFoods() {
    await api.get("/foods").then((response) => setFoods(response.data));
  };

  useEffect(() => {
    getFoods();
  }, []);

  async function handleAddFood(food: FoodDashboard) {
    try {
      const response = await api.post("/foods", {
        ...food,
        available: true,
      });
      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  async function handleUpdateFood(food: FoodDashboard) {
    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const foodsUpdated = foods.map((f) =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data
      );

      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err.message);
    };
  };

  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter((food) => food.id !== id);

    setFoods(foodsFiltered);
  };

  function toggleModal() {
    setModalOpen(!modalOpen);
  };

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen)
  };

  function handleEditFood(food: FoodDashboard) {
    setEditingFood(food);
    setEditModalOpen(true);
  };

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}

export default Dashboard;
