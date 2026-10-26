describe("discount calculations", function () {
    it("calculates each discounted line total and the cart totals", function () {
        expect(result.items.length).toBe(4);
        expect(result.items[0]).toEqual({
            id: 1,
            product_name: "product1",
            quanity: "2",
            price: "1500",
            price_after_discount: "1410.00",
            total_after_discount: "2820.00",
            discount_amount: "180.00",
            total_before_discount: "3000.00",
        });
        expect(result.items[3].price_after_discount).toBe("7896.88");
        expect(result.items[3].total_after_discount).toBe("23690.63");
        expect(result.items[3].discount_amount).toBe("2559.38");
        expect(result.total_before_discount).toBe("35220.00");
        expect(result.total_after_discount).toBe("32154.13");
    });
});
