export const fetchFeedbackData = () => {
    return Promise.resolve([
      { name: "Jenny Wilson", feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about allergies.", rating: 5 },
      { name: "Dianne Russell", feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffe. Perfect service", rating: 4 },
      { name: "Devon Lane", feedback: "Normally wings are wings but their are lean meaty and tender and", rating: 5 },
    ]);
  };