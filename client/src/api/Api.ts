import Axios from "axios";

export class Api {
    public static getCitations = async (text: string) => {
        const request =
            await Axios({
                method: "post",
                url: `/api/citations`,
                data: { text }
            });

        return request.data;
    }
}