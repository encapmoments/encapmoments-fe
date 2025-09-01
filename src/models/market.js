import axios from "axios";
import useMock from "./useMock";
import { useMarketStore, useProfileStore } from "../store/store";
import baseUrl from "./baseUrl";

export const getMarketItems = async accessToken => {
    if (useMock) {
        return useMarketStore.getState().marketItems;
    }

    const res = await axios.get(`${baseUrl}/market/items`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    });

    return res.data.items;
    /*
        RESPONSE
        [
            {
            "item_id": 1,
            "name": "스타벅스 아메리카노",
            "description": "따뜻한 아메리카노",
            "image_url": "/uploads/items/coffee.jpg",
            "category": "음료",
            "cost": 500,
            "stock": 10
            },
            {
            "item_id": 2,
            "name": "BBQ 치킨세트",
            "description": "황금올리브 치킨세트",
            "image_url": "/uploads/items/chicken.jpg",
            "category": "치킨",
            "cost": 3000,
            "stock": 2
            },
            ...
        ]
    */
};

export const getMarketItem = async (item_id, accessToken) => {
    if (useMock) {
        const item = useMarketStore.getState().marketItems.find(i => i.item_id === item_id);
        if (!item) {
            throw new Error("아이템을 찾을 수 없습니다.");
        }
        return item;
    }

    const res = await axios.get(`${baseUrl}/market/items/${item_id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    });

    return res.data;
    /*
        RESPONSE
        {
            "item_id": 1,
            "name": "스타벅스 아메리카노",
            "description": "따뜻한 아메리카노",
            "image_url": "/uploads/items/coffee.jpg",
            "category": "음료",
            "cost": 500,
            "stock": 10,
            "created_at": "2025-08-22T09:00:00Z"
        }
    */
};

export const purchaseItem = async (item_id, accessToken) => {
    if (useMock) {
        const item = useMarketStore.getState().marketItems.find(i => i.item_id === item_id);
        if (!item) {
            throw new Error("아이템을 찾을 수 없습니다.");
        }
        if (item.stock <= 0) {
            throw new Error("재고가 부족합니다.");
        }
        const currentUser = useProfileStore.getState().profileUser;
        if (currentUser.points < item.cost) {
            throw new Error("포인트가 부족합니다.");
        }
        useProfileStore.getState().updateUserPoints(currentUser.points - item.cost);
        useMarketStore.getState().decreaseStock(item_id);
        const newUserRewardId = Date.now();
        const newItem = {
            user_reward_id: newUserRewardId,
            item_name: item.name,
            item_image: item.image_url,
            barcode: `${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 4)}`,
            expires_at: "2025-12-31T23:59:59Z",
            is_used: false,
            purchased_at: new Date().toISOString(),
        };
        useMarketStore.getState().addMyItem(newItem);

        return {
            message: "구매 성공",
            user_reward_id: newUserRewardId,
            item: {
                item_id: item.item_id,
                name: item.name,
                image_url: item.image_url,
            },
            gifticon: {
                stock_id: 101,
                barcode: newItem.barcode,
                expires_at: newItem.expires_at,
                image_url: `/uploads/barcodes/${item.name}_${newItem.barcode}.png`,
            },
        };
    }

    const res = await axios.post(`${baseUrl}/market/purchase`, {
        item_id: item_id,
    }, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    });

    return res.data;
    /*
        REQUEST
        { "item_id": 1 }

        RESPONSE
        {
            "message": "구매 성공",
            "user_reward_id": 12,
            "item": {
            "item_id": 1,
            "name": "스타벅스 아메리카노",
            "image_url": "/uploads/items/coffee.jpg"
            },
            "gifticon": {
            "stock_id": 101,
            "barcode": "1234-5678-9999",
            "expires_at": "2025-12-31T23:59:59Z",
            "image_url": "/uploads/barcodes/coffee_1234.png"
            }
        }
    */

};

export const getMyItems = async accessToken => {
    if (useMock) {
        return useMarketStore.getState().myItems;
    }

    const res = await axios.get(`${baseUrl}/market/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    });

    return res.data;
    /*
        RESPONSE
        [
            {
            "user_reward_id": 12,
            "item_name": "스타벅스 아메리카노",
            "item_image": "/uploads/items/coffee.jpg",
            "barcode": "1234-5678-9999",
            "expires_at": "2025-12-31T23:59:59Z",
            "is_used": false,
            "purchased_at": "2025-08-22T10:00:00Z"
            },
            ...
        ]
    */
};

export const useItem = async (user_reward_id, accessToken) => {
    if (useMock) {
        const item = useMarketStore.getState().myItems.find(i => item.user_reward_id === user_reward_id);
        if (!item) {
            throw new Error("아이템을 찾을 수 없습니다.");
        }
        if (item.is_used) {
            throw new Error("이미 사용된 기프티콘입니다.");
        }

        useMarketStore.getState().useMyItem(user_reward_id);

        return {
            message: "기프티콘 사용 완료",
            user_reward_id: user_reward_id,
            used_at: new Date().toISOString(),
        };
    }

    const res = await axios.patch(`${baseUrl}/market/use/${user_reward_id}`, {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    });

    return res.data;
    /*
        RESPONSE
        {
            "message": "기프티콘 사용 완료",
            "user_reward_id": 12,
            "used_at": "2025-08-22T11:00:00Z"
        }
    */
};
