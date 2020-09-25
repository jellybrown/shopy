$(function () {
    $(".price_range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        create: function (event, ui) {
            //슬라이드 생성되면 할일

            const $range = $(".price_range span");
            const first = $range.filter(":first-of-type");
            const last = $range.filter(":last-of-type");

            $range.html("<i></i>");

            first.find("i").text($(".price_range").slider("values", 0));
            last.find("i").text($(".price_range").slider("values", 1));
        },
        slide: function (event, ui) {
            //슬라이드 할때마다 할일
            $("#from").val(ui.values[0]);
            $("#to").val(ui.values[1]);

            const $range = $(".price_range span");
            const first = $range.filter(":first-of-type");
            const last = $range.filter(":last-of-type");

            $range.html("<i></i>");
            first.find("i").text(ui.values[0]);
            last.find("i").text(ui.values[1]);
        },
    });

    $("#from").val($(".price_range").slider("values", 0)); //초기값
    $("#to").val($(".price_range").slider("values", 1)); //초기값

    $("#from").change(function () {
        //#from의 값이 바뀌면 할일
        const user = $("#from").val();
        const $range = $(".price_range span");
        const first = $range.filter(":first-of-type");
        $(".price_range").slider("values", 0, user);

        first.html("<i></i>");
        first.find("i").text($(".price_range").slider("values", 0));
    });

    $("#to").change(function () {
        //#to의 값이 바뀌면 할일
        const user = $("#to").val();
        const $range = $(".price_range span");
        const last = $range.filter(":last-of-type");
        $(".price_range").slider("values", 1, user);

        last.html("<i></i>");
        last.find("i").text($(".price_range").slider("values", 1));
    });

    const list = $('.new_arrivals_list li')

    const filterBox = $(".size_filter input");
    filterBox.click(function () {
        let arr = [];
        filterBox.filter(":checked").each(function () {
            arr.push("." + $(this).val());
        });
        let chooseVal = arr.join(", ");

        list.hide();
        $(chooseVal).fadeIn();

        console.log(chooseVal);
    });
});