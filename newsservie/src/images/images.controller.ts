import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors, Headers } from "@nestjs/common";
import { CreateImageDto } from "./dto/create-image.dto";
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from "./images.service";

@Controller('/api/v1/images') 
export class ImagesController {

    constructor(private imageService: ImagesService) {}

    @Post(':news_id')
    @UseInterceptors(FileInterceptor('image'))
    createImage(@UploadedFile() image, @Param('news_id') news_id, @Headers() headers, @Body() body) {
        return this.imageService.create(news_id, body);
    }

    @Get('/byNewsId/:id')
    findAllByNewsId(@Param('id') id: number) {
        return this.imageService.findAllByNewsId(id);
    }

    @Get('/byImageId/:id')
    async findOneByImageId(@Param('id') id: number) {
        return await this.imageService.findOneByImageId(id);
    }

    @Get()
    async findAll() {
        return this.imageService.findAll();
    }

    @Delete(':id')
    deleteImage(@Param('id') id: number) {
        return this.imageService.deleteImage(id);
    }
                                                                                                                                                                            
}
