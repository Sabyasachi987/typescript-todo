import app from "./app";
import { env } from "./config/env";

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);

});
