import { verify } from "jsonwebtoken";

export default (req: any, res:any, next: any) => {
    const token = req.header.access_token as string;
    if(!token) return res.status(401).send();
    
    try {
        const decodeduser = verify(token, process.env.JWT_SECRET!);
        req.user = decodeduser;
    } catch (error) {
        res.status(401).send()
    }

    return next();
}