var users = [
    {
        "id": "RJ1",
        "name": "Vu Thien Son",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ2",
        "name": "Vu Hoang Hai",
        "class": "CNTT DH63B"
    },
    {
        "id": "RJ3",
        "name": "Pham Ngoc Hai",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ4",
        "name": "Duong Duc Thang",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ5",
        "name": "Le Tien Dat",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ6",
        "name": "Dam Duc Tri Khang",
        "class": "CNTT DH63B"
    },

    {
        "id": "RJ7",
        "name": "Nguyen Thi Hoa",
        "class": "CNTT DH63B"
    },
    {
        "id": "RJ8",
        "name": "Nguyen Thi Hau",
        "class": "CNTT DH63B"
    },
    {
        "id": "RJ9",
        "name": "Duong Tri Kien",
        "class": "CNTT DH63B"
    },
    {
        "id": "RJ10",
        "name": "Nguyen Trong Huan",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ11",
        "name": "Duong Duc Thang",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ12",
        "name": "Trinh Van Thong",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ13",
        "name": "Ly Nguyen Giao",
        "class": "CNTT DH63B"
    },
    {
        "id": "RJ14",
        "name": "Nguyen Tien Dung",
        "class": "CNTT DH63A"
    },
    {
        "id": "RJ15",
        "name": "Vu Xuan Quy",
        "class": "CNTT DH63A"
    },


]



module.exports = (req, res) => {
    let { key, page, pageSize } = req.query;
    if (!key) {
        key = "";
    }
    if (!page) {
        page = 1
    }
    if (!pageSize) {
        pageSize = 5
    }
    let filterUsers = users.filter(user => user.name.toLowerCase().includes(key.toLowerCase()));

    let total = filterUsers.length;
    let fromIndex = pageSize * (page - 1);
    let endIndex = page * pageSize;

    if (endIndex > total) {
        endIndex = total;
    }
    // filterUsers = filterUsers.filter(
    //     (_, index) => index >= fromIndex && index < endIndex
    // );

    filterUsers = filterUsers.slice(fromIndex, endIndex)

    res.status(200).json({
        success: true,
        data: filterUsers,
        key,
        page,
        pageSize,
        total,
    });
}